const axios = require('axios');

let controller = {};

controller.getLottoInfo = async (req, res) => {
    try {
        let lottoInfo = await axios.get(`http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${req.params.count}`);

        if(lottoInfo.data.returnValue === "success") {
            res.status(200).json(lottoInfo.data);
            return;
        }

        throw new Error(lottoInfo.data.returnValue);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

module.exports = controller;