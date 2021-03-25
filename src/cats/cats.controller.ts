import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Post()
  create(@Body() text: string) {
    return `create ${text} miua`;
  }

  @Get()
  get() {
    return "get text miau";
  }
}
