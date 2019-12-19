/**
 * ChampController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {  

  get: function(req, res){
    sails.log.debug('GET /api/champs');
    sails.log.debug('-------------------------------------------------------');
    Champ.find()
      .then(champs => {
        if(!champs || champs.length === 0){
          return res.send({
            'success': false,
            'message': 'No records found'
          });
        }

        return res.send({
          'success': true,
          'message': 'Records fetched',
          'data': champs
        });
      })
      .catch(err => {
        sails.log.debug(err);

        return res.send({
          'success': false,
          'message': 'Records fetchet',
        });
      });
  },

  create: function(req, res){
    sails.log.debug('Post /api/champs:');
    sails.log.debug('body: ',req.allParams());
    sails.log.debug('-------------------------------------------------------');
    Champ.create(req.allParams())
      .then(champ => {
        return res.send({
          'success': true,
          'message': 'Record created successfully'
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          'success': false,
          'message': 'Unable to create record'
        });
      });
  },

  update: function(req, res){
    sails.log.debug('PUT /api/champs/:id');
    sails.log.debug('champ id:', req.param('id'));
    sails.log.debug('-------------------------------------------------------');
    Champ.update(req.param('id'), req.allParams())
      .then(champ => {
        return res.send({
          'success': true,
          'message': 'Record Updated',
          'data': champ
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          'success': false,
          'message': 'Unable to update record',
        });
      });
  },

  delete: function(req, res){
    sails.log.debug('DELETE /api/champs/:id');
    sails.log.debug('champ id:', req.param('id'));
    sails.log.debug('-------------------------------------------------------');
    Champ.destroy(req.param('id'))
      .then(champ => {
        return res.send({
          'success': true,
          'message': 'Record deleted successfully',
          'data': champ
        });
      })
      .catch(err => {
        sail.log.debug(err);
        res.send({
          'success': false,
          'message': 'Unable to delete record',
        });
      });
  }
};

