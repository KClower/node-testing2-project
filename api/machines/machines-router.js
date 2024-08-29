const router = require('express').Router();

const Machines = require('./machines-model.js');

router.get('/', (req, res, next) => {
    Machines.getAll(req.query)
        .then(machines => {
            return res.status(200).json(machines);
        });
});

router.get('/:id', (req, res, next) => {
    Machines.getById(req.params.id)
        .then(machine => {
            if (machine) {
                return res.status(200).json(machine);
            } else {
                return res.status(404).json({ Message: "machine not found in database." });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ Message: "Error retrieving machine from database." });
        });
});

router.post('/', (req, res, next) => {
    const newMachine = req.body;
    if (!newMachine.name) {
        return res.status(404).json({ Message: "Please provide the name of machine." });
    }
    Machines.create(newMachine)
        .then(result => {
            Machines.getById(result.id)
                .then(createdMachine => {
                    res.status(201).json({ Message: "Created new machine in database.", createdMachine });
                })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ Message: "There was an error saving the new machine to the database." });
        })
})


router.delete('/:id', (req, res) => {
    Machines.deleteById(req.params.id)
        .then(machine => {
            if (!machine) {
                return res.status(404).json({ Message: "Machine not found in database." });
            } else {
                return Machines.deleteById(req.params.id);
            }
        })
        .then(() => {
            res.status(200).json({ Message: "Machine deleted successfully from database." });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Message: "an error occured deleting machine from database." });
        });
});

module.exports = router;