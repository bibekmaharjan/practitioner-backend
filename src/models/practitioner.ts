export default (sequelize, Sequelize) => {
  const practitioner = sequelize.define(
    'practitioner_list',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      workingDays: {
        type: Sequelize.INTEGER,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    },
    {
      tableName: 'practitioner_list',
    }
  );

  return practitioner;
};
