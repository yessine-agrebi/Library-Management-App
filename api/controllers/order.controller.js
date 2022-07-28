import Order from "../models/order.js";


export const getAllOrders = async (req, res) => { 
  
    try {
      let Orders = await Order
        .find({})
        .populate("allProduct.id", "designation imageartpetitf prixVente")
        .populate("user", "username email")
        .sort({ _id: -1 });
      if (Orders) {
        return res.json({ Orders });
      }
    } catch (err) {
      console.log(err);
    }
  }

  export const getOrderByUser = async (req, res) => { 

    let { id } = req.params;
    if (!id) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let Order = await Order
          .find({ user: id })
          .populate("allProduct.id", "designation imageartpetitf prixVente")
          .populate("user", "nom email")
          .sort({ _id: -1 });
        if (Order) {
          return res.json({ Order });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  export const postCreateOrder = async (req, res) => { 
    console.log(req.body)
    const { allProduct, user, amount} = req.body;

    const newOrder = new Order({ allProduct:allProduct, user:user, amount:amount })

    try {
        await newOrder.save();

        res.status(201).json(newOrder );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
  }

  export const postUpdateOrder = async (req, res) => { 

    const { id } = req.params; 
      
    const { status} = req.body; 
 
    const ord1 = { status:status,_id: id };

    await Order.findByIdAndUpdate(req.params.id, ord1);

    const ord=  await Order.findById(ord1._id)
                            .populate("allProduct.id", "designation imageartpetitf prixVente")
                            .populate("user", "nom email")
                            .exec();
    res.json(ord);

  }

  export const postDeleteOrder = async (req, res) => { 
    let { id } = req.params;
    if (!id) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteOrder = await Order.findByIdAndDelete(id);
        if (deleteOrder) {
          return res.json({ success: "Order deleted successfully" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
