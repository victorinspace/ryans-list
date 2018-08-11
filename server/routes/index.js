const router = require('express').Router()
const conn = require('../conn')

let newListing = []

router.get('/categories', (req, res, next) => {
	const yesAllCats = `
	SELECT 
		child.id, child.category, parent.category as parent_category, child.slug
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

router.get('/listings/:id', (req, res, next) => {
	const yesAllListings = `
		SELECT 
			list.name, list.image, list.child_id, list.slug
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

// create new row in the listings database,
// starting with parent_id
router.post('/posting', (req, res, next) => {
	const sql = `
		INSERT INTO
			listings (parent_id)
		VALUES
			(${req.body.parent_id})
	`
	conn.query(sql, (error, results, fields) => {
		newListing.push('test')
	})	
})

// second router for updating the sub category


// third router for updating the rest of the fields


module.exports = router
