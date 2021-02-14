const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    minLenght: 4,
    validate: {
      validator: function (username) {
        return username.length >= 4;
      },
      message: props => `Username ${props.value} is too short (have to be at least 4 charachters long)`
    }
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: props => `${props.value} is not a valid email`
    }
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      validate: {
        validator: function (city) {
          return /^([A-Za-z\s])+?$/.test(city);
        },
        message: props => `${props.value} is not a valid city name only spaces and Alphabet charachters are allowed in City name`
      }
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: function (zipcode) {
          return /^\d\d\d\d\d-\d\d\d\d$/.test(zipcode);
        },
        message: props => `${props.value} is not a valid zipcode, zipcode should be in foroamt like #####-####`
      }
    },
    geo: {
      lat: {
        type: String,
        required: true
      },
      lng: {
        type: String,
        required: true
      },
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (phone) {
        return /^\d-\d\d\d-\d\d\d-\d\d\d\d$/.test(phone);
      },
      message: props => `${props.value} is not a valid phone number, phone should be in foroamt like #-###-###-####`
    }
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function (website) {
        return /^http(s)*(.)+$/.test(website);
      },
      message: props => `${props.value} is not a valid web address, it shoud start with http or https`
    }
  },
  company: {
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    },
  }
});

UserSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

UserSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

UserSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

UserSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;