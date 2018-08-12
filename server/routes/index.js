const router = require('express').Router()
const conn = require('../conn')

// ******************************
// 	MAIN PAGE
// ******************************

// Populate the Main Page
router.get('/categories', (req, res, next) => {
	const yesAllCats = `
		SELECT 
			child.id, child.category, 
			parent.category as parent_category, child.slug
		FROM 
			categories child
		LEFT JOIN 
			categories parent ON child.parent_id = parent.id
	`

	conn.query(yesAllCats, (error, results, fields) => {
		let mainCat = []
		
		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category == null) {
				results[i].sub = []
				mainCat.push(results[i])
			}
		}

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category != null) {
				for (let j = 0; j < mainCat.length; j++) {
					if (mainCat[j].category == results[i].parent_category) {
						mainCat[j].sub.push(results[i])
					}
				}
			}
		}

		res.json(mainCat)
	})
})

// Get Listings by Header (Main Category)
router.get('/all-listings/:id', (req, res, next) => {
	const sql = `
	SELECT 
			list.id, list.parent_id, list.name, list.image, list.slug
	FROM 
		listings list
	LEFT JOIN
		categories cat
	ON
		list.parent_id = cat.id 
	WHERE 
		list.parent_id = cat.id
	`

	conn.query(sql, (error, results, fields) => {
		let headerListings = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_id == id) {
				headerListings.push(results[i])
			}
		}

		res.json(headerListings)
	})
})

// Get Listings by Sub-Category
router.get('/listings/:id', (req, res, next) => {
	const yesAllListings = `
		SELECT 
			list.id, list.name, list.image, list.child_id, list.slug
		FROM 
			listings list
		LEFT JOIN
			categories cat
		ON
			list.child_id = cat.id 
		WHERE 
			list.child_id = cat.id
	`

	conn.query(yesAllListings, (error, results, fields) => {
		let subCat = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].child_id == id) {
				subCat.push(results[i])
			}
		}

		res.json(subCat)
	})
})

// Get Indivual Post
router.get('/post/:id', (req, res, next) => {
	const sql = `
		SELECT 
			id, name, image, description
		FROM 
			listings
	`

	conn.query(sql, (error, results, fields) => {
		let post = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].id == id) {
				post.push(results[i])
			}
		}

		res.json(post)
	})
})

// ******************************
// 	POSTING
// ******************************

// Get List of Main Categories (Headers)
router.get('/post1', (req, res, next) => {
	const sql = `
		SELECT 
			child.id, child.category, 
			parent.category as parent_category, child.slug
		FROM 
			categories child
		LEFT JOIN 
			categories parent ON child.parent_id = parent.id
	`

	conn.query(sql, (req, res, next) => {
		let mainCat = []
		
		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category == null) {
				results[i].sub = []
				mainCat.push(results[i])
			}
		}

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category != null) {
				for (let j = 0; j < mainCat.length; j++) {
					if (mainCat[j].category == results[i].parent_category) {
						mainCat[j].sub.push(results[i])
					}
				}
			}
		}

		res.json(mainCat)
	})
})







































// create new row in the listings database,
// starting with parent_id
router.post('/posting', (req, res, next) => {
	const sql = `
		INSERT INTO
			listings (parent_id)
		VALUES
			(?)
	`
	conn.query(sql, [req.body.parent_id], (error, results, fields) => {
		res.json(results)
	})
})

// second router for updating the sub category
router.post('/posting/sub', (req, res, next) => {
	const updateSub = `
		UPDATE
			listings (child_id)
		SET
			child_id = (${req.body.parent_id})
		WHERE
			child_id = parent_id
	`

	conn.query(updateSub, (error, results, fields) => {
		res.json(results)
	})
})

// third router for updating the rest of the fields


module.exports = router
