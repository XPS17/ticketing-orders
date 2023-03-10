import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketUpdatedEvent } from '@xps179720/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    // const ticket = await Ticket.findById(data.id);
    // const ticket = await Ticket.findOne({
    //   _id: data.id,
    //   version: data.version -1
    // });
    const ticket = await Ticket.findByEvent(data);
      

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const { title, price } = data;
    // const { title, price, version } = data;
    ticket.set({ title, price });
    // ticket.set({ title, price, version });
    await ticket.save();

    msg.ack();
  }
}
