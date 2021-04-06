const { Schema, model } = require('mongoose');


const MenuSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    
    descripcion: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    precio: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    tiempo: {
        type: String,
        required: true,
        unique: true
    }
    
});


MenuSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})



module.exports = model( 'Menu', MenuSchema );