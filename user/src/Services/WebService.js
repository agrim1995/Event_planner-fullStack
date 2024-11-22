import axios from "axios";
class WebService
{
    postAPI(url,data)
    {
       var result = axios.post(url,data);
       return result;
    }
    getAPIUsing(url)
    {
      var result = axios.get(url)
       return result;
    }

   
}
export default new WebService();