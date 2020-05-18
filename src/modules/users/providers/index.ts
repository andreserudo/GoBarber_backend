import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCrypthHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
