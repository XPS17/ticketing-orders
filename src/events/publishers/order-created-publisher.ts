import { Publisher, OrderCreatedEvent, Subjects } from "@xps179720/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
