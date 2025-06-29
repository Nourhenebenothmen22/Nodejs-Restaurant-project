const jwt = require('jsonwebtoken');

const requireSignIn = (req, res, next) => {
  // 1. Vérification du header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: "Authentification requise. Format: Bearer <token>",
    });
  }

  // 2. Extraction du token
  const token = authHeader.split(' ')[1];

  // 3. Vérification synchrone
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 4. Injection CORRECTE dans req.user
    req.user = {
      userId: decoded.userId,  // Utilisez le même nom que dans loginController
      email: decoded.email,
      usertype: decoded.usertype
    };
    
    next();
  } catch (error) {
    // 5. Gestion d'erreur améliorée
    let message = "Token invalide";
    if (error.name === 'TokenExpiredError') {
      message = "Token expiré";
    }
    
    return res.status(401).json({
      success: false,
      message: `Erreur d'authentification: ${message}`,
    });
  }
};

module.exports = requireSignIn;