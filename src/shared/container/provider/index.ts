import { container } from 'tsyringe';
import IStorageProvider from './StoreProvider/models/IStorageProvider';
import DiskStorageProvider from './StoreProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/ImailProvider';
import EtherialMailProvider from './MailProvider/implementations/EherialMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherialMailProvider(),
);
