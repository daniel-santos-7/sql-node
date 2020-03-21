const User = require('../models/User');
const {Op} = require('sequelize');

module.exports = {

    async show(req,res) {

        try {
            
            const users = await User.findAll({

                attributes: ['name','email'],
                where: {
                    email: {
                        [Op.iLike]: '%@rocketseat.com.br'
                    }
                },
                include: [
                    { 
                        association: 'addresses',
                        where: {
                            street: 'Rua Guilerme Gembala'
                        } 
                    },
                    {
                        association: 'techs',
                        required: false,
                        where: {
                            name: {
                                [Op.iLike]: 'React%'
                            }
                        }
                    }
                ]
            });

            return res.json(users);

        } catch (err) {
            console.log(err);
            return res.status(500).send();
        }

    
    }

}