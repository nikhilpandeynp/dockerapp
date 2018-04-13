const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectID = Schema.ObjectId;

module.exports = () => {
    const ideaSchema = new Schema({
        author: ObjectID,
        idea: String
    });

    let Idea = mongoose.model('Idea', ideaSchema);

    return Idea;
}