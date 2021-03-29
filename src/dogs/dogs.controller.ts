import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";

@Controller("dogs")
export class dogsController {
  @Post()
  create(@Body() data: { data: { text: string }}) {
    return `create ${data.data.text} hau bark`;
  }

  @Get(":id")
  getCurrent(@Param("id") id: string) {
    return "get text hauu";
  }
}
