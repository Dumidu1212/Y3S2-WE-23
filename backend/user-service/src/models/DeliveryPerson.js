const mongoose = require("mongoose");

const deliveryPersonSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  address: { type: String },
  location: { type: { type: String, enum: ["Point"], default: "Point" }, coordinates: [Number] },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  vehicleNumber: { type: String, unique: true },
  license: { type: String, unique: true },
  gender: { type: String, enum: ["Male", "Female"] , default:"Male" },
  isAvailable: { type: Boolean, default: true },
  status: { type: String, enum: ["Active", "Inactive", "Pending"], default: "Pending" }, 
}, { timestamps: true });

deliveryPersonSchema.index({ location: "2dsphere" }); // Enable geolocation queries

module.exports = mongoose.model("DeliveryPerson", deliveryPersonSchema);
