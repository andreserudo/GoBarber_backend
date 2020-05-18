import AppError from '@shared/errors/AppErrors';
import { injectable, inject } from 'tsyringe';

// import User from '../infra/typeorm/entities/User';

import IMailProvider from '@shared/container/provider/MailProvider/models/ImailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokentRepository from '../repositories/IUserTokenRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,

    @inject('MailProvider') private mamilProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokentRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    await this.userTokensRepository.generate(user.id);

    await this.mamilProvider.sendMail(
      email,
      'Pedido de recuperação de senha recebido.',
    );
  }
}

export default SendForgotPasswordEmailService;
