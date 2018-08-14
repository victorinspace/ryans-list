const router = require('express').Router()
const conn = require('../conn')



// ******************************
// 	MAIN PAGE
// ******************************

// Populate the Main Page
router.get('/categories', (req, res, next) => {
	const sql = `
		SELECT 
			child.id, child.category, 
			parent.category AS parent_category, child.slug
		FROM 
			categories child
		LEFT JOIN 
			categories parent ON child.parent_id = parent.id
	`

	conn.query(sql, (error, results, fields) => {
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
			list.id, list.parent_id, list.name, list.image
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
	const sql = `
		SELECT 
			list.name, list.image, list.child_id, list.id
		FROM 
			listings list
		LEFT JOIN
			categories cat
		ON
			list.child_id = cat.id 
		WHERE 
			list.child_id = cat.id
	`

	conn.query(sql, (error, results, fields) => {
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
// router.get('/makepost', (req, res, next) => {
// 	const sql = `
// 		SELECT 
// 			id, child.id, child.category, 
// 			parent.category as parent_category, child.slug
// 		FROM 
// 			categories child
// 		LEFT JOIN 
// 			categories parent ON child.category_id = parent.id
// 	`

// 	conn.query(sql, (req, res, next) => {
// 		let mainCat = []
		
// 		for (let i = 0; i < results.length; i++) {
// 			if (results[i].parent_category == null) {
// 				results[i].sub = []
// 				mainCat.push(results[i])
// 			}
// 		}

// 		res.json(mainCat)
// 	})
// })

// Create New Listing
router.post('/makepost', (resp, res, next) => {
	const sql = `
		INSERT INTO
			listings (name, child_id, image, description)
		VALUES
			(?, ?, ?, ?)
	`

	conn.query(sql, [req.body.name, req.body.child_id, req.body.description, req.body.image], (err, results, fields) => {
		res.json(results)
	})
})



module.exports = router
