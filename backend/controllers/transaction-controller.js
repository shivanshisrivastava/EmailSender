const DUMMY_TRANSACTIONS = [{
    id: 1,
    name: "Shivanshi Srivasta",
    email: "Hi",
   date: "test",
  },
  {
    id: 2,
    name: "Simmi",
    email: "How are you",
   date: "test1",
  },
  {
    id: 2,
    name: "Riddhi",
    email: "Hey",
   date: "test22",
  }];

const transactions = async (req, res, next) =>
{
try {
    const Id = +req.params.id;
    const transactions = await DUMMY_TRANSACTIONS.filter(t => t.id === Id);
    await res.json({message : transactions});
} catch (error) {
    res.json({message : 'Error'});
}
}

const getCount = async (req, res, next) =>
{
try {
    const Id = +req.params.id;
    const transactions = await DUMMY_TRANSACTIONS.filter(t => t.id === Id);
    await res.json({message : transactions.length});
} catch (error) {
    res.json({message : 'Error'});
}
}

const getAll = async (req, res, next) =>
{
try {
    res.json({message : DUMMY_TRANSACTIONS});
} catch (error) {
    res.json({message : 'Error'});
}
}

exports.transactions = transactions;
exports.getCount = getCount;
exports.getAll = getAll;