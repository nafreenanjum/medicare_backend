// const jwt = require('jsonwebtoken');

// const verifyToken = (allowedRoles = []) => {
//   return (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'Authorization token missing or invalid' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;

//       // Check role-based access if roles are provided
//       if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
//         return res.status(403).json({ message: 'Access denied: Unauthorized role' });
//       }

//       next();
//     } catch (err) {
//       return res.status(401).json({ message: 'Invalid or expired token' });
//     }
//   };
// };

// module.exports = verifyToken;



// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied: Unauthorized role' });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
};

// Ensure that you export verifyToken correctly
module.exports = verifyToken;
