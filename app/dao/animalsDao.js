const Animals = require('../model/animals');

const daoCommon = require('./commons/daoCommon')

class AnimalsDao {

  constructor() {
    this.common = new daoCommon();
  }

  async findById(id) {
    let sqlRequest = "SELECT id, name, animal_type_id FROM animals WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return await this.common.findOne(sqlRequest, sqlParams).then(row =>
      new Animals(row.id, row.name, row.animal_type_id));
  };

  async findAll() {
    let sqlRequest = "SELECT * FROM animals";
    return await this.common.findAll(sqlRequest).then(rows => {
      let owners = [];
      for (const row of rows) {
        owners.push(new Animals(row.id, row.name));
      }
      return cars;
    });
  };

  update(Animal) {
    let sqlRequest = "UPDATE animals SET " +
      "name=$name, " +
      "animal_type_id=$animal_type_id, " +
      "WHERE id=$id";

    let sqlParams = {
      $name: Animal.name,
      $animal_type_id: Animal.animal_type_id
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  create(Animal) {
    let sqlRequest = "INSERT into animals (name) " +
      "VALUES ($name)";
    let sqlParams = {
      $name: Animal.name,
      $animal_type_id: animal_type_id.name
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  deleteById(id) {
    let sqlRequest = "DELETE FROM owners WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return this.common.run(sqlRequest, sqlParams);
  };

}

module.exports = AnimalsDao