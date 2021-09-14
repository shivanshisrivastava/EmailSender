import Card from '../UI/Card';
import Input from '../UI/Input';
const User = (props) =>
{
    return(<Card>
       <Input placeholder='To'/>
       <Input placeholder='Subject'/>
       <input placeholder='Body' style={{height : '12rem', width : '56vh'}}/>
      </Card>);
}

export default User;