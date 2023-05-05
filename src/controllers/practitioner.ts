import db from '../models';

const Practitioner = db.practitioner;

/**
 * Get list of practitioner
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getPractitioner = async (req, res) => {
  await Practitioner.findAll()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

/**
 * Add practitioner to practitioner list.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const addPractitioner = async (req, res) => {
  await Practitioner.create({
    fullName: req.body.fullName,
    email: req.body.email,
    contact: req.body.contact,
    dob: req.body.dob,
    workingDays: req.body.workingDays,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    address: req.body.address,
    gender: req.body.gender,
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

/**
 * Update practitioner of practitioner list.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const updatePractitioner = async (req, res) => {
  try {
    const { id } = req.params;

    const { fullName, email, contact, dob, workingDays, startTime, endTime, address, gender } = req.body;

    // update the practitioner record
    const [numUpdated, updatedPractitioner] = await Practitioner.update(
      { fullName, email, contact, dob, workingDays, startTime, endTime, address, gender },
      { where: { id } }
    );

    if (numUpdated === 1) {
      const user = await Practitioner.findByPk(id);
      res.send(user);
    } else {
      throw new Error('Practitioner not found');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/**
 * Delete practitioner record by given id
 *
 * @param {Request} req
 * @param {Response} res
 */
export const deletePractitioner = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the practitioner record
    const numDeleted = await Practitioner.destroy({ where: { id } });

    if (numDeleted === 1) {
      res.send({ message: 'Practitioner deleted successfully' });
    } else {
      throw new Error('Practitioner not found');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
