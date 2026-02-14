import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({ 
  type: 'postgres',
  host:  'localhost',
  port: 5432,
  username: 'postgres',
  password:  '1234',
  database:  'boarddb',
  autoLoadEntities: true,
  synchronize: true,
}),
BoardsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
