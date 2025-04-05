import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
    const token = req.cookies.jwt || req.cookies._vercel_jwt || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    /*console.log(`\nToken --> ${token}\n
            Cookie --> ${req.cookies.jwt}\n
            Header --> ${req.headers.authorization}\n`);*/

    if (!token) return res.json({ isSuccess: false, message: "Unauthorized: No token provided" });

    jwt.verify(token, process.env.JWT_SIGNATURE, (err, decoded) => {
        if (err) return res.json({ isSuccess: false, message: "Forbidden: Invalid token" });

        req.user = decoded;
        next();
    });
}