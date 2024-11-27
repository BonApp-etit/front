export default function handler(req, res) {
  res.status(200).json([
    {
      status: "active",
      orders: [
        {
          dishName: "CocaCola 600ml",
          table: "4",
          time: "5",
          baseIngredients: "No aplica",
          extraIngredients: "No aplica",
        },
      ],
    },
    {
      status: "process",
      orders: [
        {
          dishName: "Hamburguesa",
          table: "2",
          time: "15",
          baseIngredients: "Pan, carne, lechuga",
          extraIngredients: "Queso, jalapeño",
        },
      ],
    },
    {
      status: "done",
      orders: [
        {
          dishName: "Ensalada César",
          table: "6",
          time: "10",
          baseIngredients: "Lechuga, crutones, queso parmesano",
          extraIngredients: "Aderezo César",
        },
        {
          dishName: "Ensalada César",
          table: "6",
          time: "10",
          baseIngredients: "Lechuga, crutones, queso parmesano",
          extraIngredients: "Aderezo César",
        },
        {
          dishName: "Ensalada César",
          table: "6",
          time: "10",
          baseIngredients: "Lechuga, crutones, queso parmesano",
          extraIngredients: "Aderezo César",
        },
        {
          dishName: "Ensalada César",
          table: "6",
          time: "10",
          baseIngredients: "Lechuga, crutones, queso parmesano",
          extraIngredients: "Aderezo César",
        },
      ],
    },
  ]);
}
