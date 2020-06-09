const axios = require('axios');

export default axios({
  url: 'https://picsum.photos/200/300',
  method: 'post',
  data: {
  },
}).then((result) => {
  console.log(result.data);
  // dispatch(setProductDetails(result.data));
});