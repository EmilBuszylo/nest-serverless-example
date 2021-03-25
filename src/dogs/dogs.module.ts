import { Module } from "@nestjs/common";
import { dogsController } from "./dogs.controller";

@Module({
  controllers: [dogsController]
})
export class DogsModule {
}
