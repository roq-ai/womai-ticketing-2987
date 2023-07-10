import { EventInterface } from 'interfaces/event';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  name: string;
  price: number;
  event_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  event?: EventInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  event_id?: string;
  user_id?: string;
}
