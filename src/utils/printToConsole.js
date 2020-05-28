export default (users) => {
  let result = {
    registrations: [],
    total_amount: 0,
  };

  Object.values(users).forEach((user) => {
    const registration = {
      event_registration_firstname: user.firstName,
      event_registration_lastname: user.lastName,
      event_registration_email: user.email,
      event_registration_type_id: parseInt(user.type),
      event_registration_type_price: user.price,
      workshops: user.workshops,
    };

    result.registrations = [...result.registrations, registration];
    result.total_amount +=
      user.price +
      user.workshops.reduce(
        (total, item) => total + item.event_workshop_price,
        0
      );
  });

  console.log(result);
};
