import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ShutdownService implements OnModuleInit {
  private readonly signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
  private readonly dataSource: DataSource;
  public isShuttingDown: boolean = false;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async onModuleInit() {
    for (const signal of this.signals) {
      process.on(signal, async () => {
        this.isShuttingDown = true;
        console.log(`Received signal: ${signal}`);
        await this.handleShutdown();
        process.exit(0);
      });
    }
  }

  async handleShutdown() {
    console.log('Blocking incoming requests...');
    console.log('Performing graceful shutdown tasks...');
    // await Promise.all([]);

    if (this.dataSource.isInitialized) {
      console.log('Closing TypeOrm connection...');

      // Delay before destroy datasource connection
      const delayTimeoutMs = 1000;
      await new Promise((resolve) => setTimeout(resolve, delayTimeoutMs));
      await this.dataSource.destroy();
    }
    console.log('Graceful shutdown complete.');
  }

  // Optional: Perform any additional cleanup tasks here
  // async onModuleDestroy() { }
}
