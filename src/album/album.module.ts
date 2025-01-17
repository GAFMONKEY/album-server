import { AlbumGetController } from './rest/album-get.controller.js';
import { AlbumMutationResolver } from './graphql/album-mutation.resolver.js';
import { AlbumQueryResolver } from './graphql/album-query.resolver.js';
import { AlbumReadService } from './service/album-read.service.js';
import { AlbumWriteController } from './rest/album-write.controller.js';
import { AlbumWriteService } from './service/album-write.service.js';
import { KeycloakModule } from '../security/keycloak/keycloak.module.js';
import { MailModule } from '../mail/mail.module.js';
import { Module } from '@nestjs/common';
import { QueryBuilder } from './service/query-builder.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entity/entities.js';

/**
 * Das Modul besteht aus Controller- und Service-Klassen für die Verwaltung von
 * Bücher.
 * @packageDocumentation
 */

/**
 * Die dekorierte Modul-Klasse mit Controller- und Service-Klassen sowie der
 * Funktionalität für TypeORM.
 */
@Module({
    imports: [KeycloakModule, MailModule, TypeOrmModule.forFeature(entities)],
    controllers: [AlbumGetController, AlbumWriteController],
    // Provider sind z.B. Service-Klassen fuer DI
    providers: [
        AlbumReadService,
        AlbumWriteService,
        AlbumQueryResolver,
        AlbumMutationResolver,
        QueryBuilder,
    ],
    // Export der Provider fuer DI in anderen Modulen
    exports: [AlbumReadService, AlbumWriteService],
})
export class AlbumModule {}
