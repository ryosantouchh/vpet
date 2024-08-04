import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/infrastructure/persistence/database/database.module';
import { DataSource } from 'typeorm';
import { ShutdownModule } from './infrastructure/shutdown/shutdown.module';
import { ConfigurationModule } from './infrastructure/config/config.module';
import { UserModule } from './application/user/user.module';

@Module({
  imports: [DatabaseModule, ShutdownModule, ConfigurationModule, UserModule],
})
export class AppModule {
  constructor(private _datasource: DataSource) { }
}
