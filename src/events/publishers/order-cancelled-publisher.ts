import { Subjects, Publisher, OrderCancelledEvent } from "@xps179720/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
