//index = listagem
//show = unica
//store = criar
//update = alterar
//destroy = deletar
const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    } else {
      return res.json({ mensage: "Este usuario ja existe" });
    }

    return res.json({ user });
  }
};
