/*
 * Visengine 2.0
 * Questo servizio offre chiamate di rest per usufruire di tutta una serie di servizi camerali, catastali o di patronato legati a imprese e privati
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.59
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The PutBodySearch model module.
 * @module model/PutBodySearch
 * @version 2.0.0
 */
export default class PutBodySearch {
  /**
   * Constructs a new <code>PutBodySearch</code>.
   * @alias module:model/PutBodySearch
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutBodySearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutBodySearch} obj Optional instance to populate.
   * @return {module:model/PutBodySearch} The populated <code>PutBodySearch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutBodySearch();
      if (data.hasOwnProperty('id_ricerca'))
        obj.idRicerca = ApiClient.convertToType(data['id_ricerca'], 'String');
      if (data.hasOwnProperty('indice'))
        obj.indice = ApiClient.convertToType(data['indice'], 'Number');
    }
    return obj;
  }
}

/**
 * Identificatore della ricerca per la quale si dispone di un risultato
 * @member {String} idRicerca
 */
PutBodySearch.prototype.idRicerca = undefined;

/**
 * Indice del risultato della ricerca che abbiamo scelto
 * @member {Number} indice
 */
PutBodySearch.prototype.indice = undefined;

