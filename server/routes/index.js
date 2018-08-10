const router = require('express').Router()
const conn = require('../conn')

router.get('/categories', (req, res, next) => {
	const yesAllCats = `
	SELECT 
		child.category, parent.category as parent_category, child.slug
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


{[
	{
		name: 'main',
		sub: [
		]
	}
]}





module.exports = router
