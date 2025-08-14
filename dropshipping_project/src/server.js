const express = require('express');
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const marketerRoutes = require('./routes/marketer');
const supplierRoutes = require('./routes/supplier');

const app = express();
app.use(cors());
app.use(express.json());

// mount routes
app.use('/admin', adminRoutes);
app.use('/marketer', marketerRoutes);
app.use('/supplier', supplierRoutes);

// health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Dropshipping platform API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
