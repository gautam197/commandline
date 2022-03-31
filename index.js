const mongoose = require("mongoose");
const customer = require("./model/customer");
const Customer = require("./model/customer");
const child_process = require("child_process");

const db = mongoose.connect("mongodb://localhost:27017/cliprojet");

const addCustomer = (customer) => {
  console.info(customer);
  Customer.create({
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    phone: customer.phone,
  }).then((customer) => {
    console.info("New Customer added!!");
    db.close;
    process.exit(1);
  });
};

const findCustomer = (name) => {
  Customer.find({ first_name: name }).then((customer) => {
    console.info(customer);
    console.info(`${customer.length} matches`);
    process.exit(1);
  });
};

const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer updated successfully!!");
    process.exit(1);
  });
};
const removeCustomer = (_id) => {
  Customer.findByIdAndRemove(_id).then((customer) => {
    console.info("Customer removed successfully!!");
    process.exit(1);
  });
};

const listCustomer = () => {
  Customer.find().then((customer) => {
    console.info(customer);
    console.info(`${customer.length} matches`);
    process.exit(1);
  });
};

const createReop = (url) => {
  child_process.execSync(`git clone ${url}`);

  process.exit(1);
};
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
  createReop,
};
