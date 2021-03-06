// Persistência <-> Repositório <-> Rota

// find=> procurar por informações;
// create=> criar uma nova informação;
// => Sempre um repositorio por modulo;

import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}


class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all() {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO) {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;


/**
 * Um repositório é a conexão entre a persistência(um banco de dados por exemplo) e a nossa aplicação.
 * É pelo repositório onde iremos buscar as informações no banco(ou onde tiver salva) e devolver para a aplicação.
 */