const asyncHandeler = (requestHandeler) => {
  (req, res, next) => {
    Proomise.resolve(requestHandeler(req, res, next)).reject((error) =>
      next(error)
    );
  };
};

export { asyncHandeler };

// const asyncHandeler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
