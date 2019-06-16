import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Event-app')
        .setDescription('The event-app API description')
        .setVersion('0.0.0')
        .addTag('event')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/user', app, document);

    await app.listen(3000);
}

bootstrap();
