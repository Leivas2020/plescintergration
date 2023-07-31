/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  Request,
  HttpStatus,
  HttpException,
  Patch,
} from "@nestjs/common";

import {
  IntersectionType,
  OmitType,
  PartialType,
} from "@nestjs/swagger";

import {
  ActionFieldsRequestDto,
  AddonsRequestDto,
  RequestDto,
} from "./dtos/request.dto";
import {
  MetaResponseDto,
  BooleanResponseDto,
  InfoResponseDto,
  TaskResponseDto,
  ErrorResponseDto,
} from "./dtos/responses.dto";

import { JwtPayloadRequest } from "./dtos/jwt-payload.request";
import { LabelTypeEnum } from "./enums/label.type.enum";
export class RequestCreateDto extends OmitType(RequestDto, [
  "previousProductData",
] as const) {}

export class RequestOptionalPreviousDto extends IntersectionType(
  OmitType(RequestDto, ["previousProductData"] as const),
  PartialType(OmitType(RequestDto, ["productData", "userData"] as const))
) {}

@Controller()
// TODO: Uncomment the line below to enable authentication
// @UseGuards(AuthGuard)
// @UseInterceptors(senderIsHoster)
export class AppController {
  constructor() //initialize your services here
  {}

  /**
   * @returns ProviderInfoResponseDto
   */
  @HttpCode(200)
  @Get("info")
  async info(
    @Request() request: Request & JwtPayloadRequest
  ): Promise<InfoResponseDto | ErrorResponseDto> {
    return {
      info: {
        name: "Plesk",
        description: "Plesk is a commercial web hosting platform",
        logo: "https://www.plesk.com/wp-content/uploads/2020/06/plesk-Brand-Logo_Light.svg",
        actionFields: [
          {
            id: "service_plan",
            label: "Service Plan",
            description: "The service plan to use for the subscription",
            type: LabelTypeEnum.SELECT,
            disabled: false,
            hidden: false,
            required: true,
            value: {
              basic: "Basic",
              bronze: "Bronze",
            },
            regexValidation: null,
            remoteValidation: null,
          }
        ],
        addons: [],
        listActions: [],
        menuItems: [],
        onBoardingUrl: null,
        productTabs: [],
        settings: [], // έχει
        returnMetaKeys: {
          ip: 'IP',
          domain: 'Domain',
          username: "Username",
          password: "Password",
          plesk_url: "Plesk URL",
        },
      },
    };
  }

  /**
   *
   * @param requestBody RequestCreateDto
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @HttpCode(201)
  @Post("create")
  public async create(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestCreateDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    
    // ένα request στον plesk server για να δημιουργήσει το hosting

    return {
      meta: {
        ip: '',
        domain: '',
        username: "",
        password: "",
        plesk_url: "",
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @Patch("renew")
  @HttpCode(200)
  async renew(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      meta: {
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @Patch("upgrade")
  @HttpCode(200)
  async upgrade(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      meta: {
        //your meta data
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @Patch("downgrade")
  @HttpCode(200)
  async downgrade(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      meta: {
        // your meta data
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @HttpCode(200)
  @Post("suspend")
  async suspend(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestOptionalPreviousDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      meta: {
        //your meta data
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with MetaResponseDto|TaskResponseDto|ErrorResponseDto
   */
  @HttpCode(200)
  @Post("unsuspend")
  async unsuspend(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestOptionalPreviousDto
  ): Promise<MetaResponseDto | TaskResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      meta: {
        //your meta data
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with BooleanResponseDto|ErrorResponse
   */
  @Post("upgradable")
  @HttpCode(200)
  async upgradable(
    @Body() requestBody: RequestDto
  ): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return await Promise.all([])
      .then(() => {
        return {
          result: true,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  /**
   *
   * @param requestBody
   * @returns Promise with BooleanResponseDto|ErrorResponse
   */
  @Post("downgradable")
  @HttpCode(200)
  async downgradable(
    @Body() requestBody: RequestDto
  ): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return await Promise.all([])
      .then(() => {
        return {
          result: true,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  /**
   *
   * @param requestBody
   * @returns Promise with BooleanResponseDto|ErrorResponse
   */
  @Post("delete")
  @HttpCode(200)
  async delete(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto
  ): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return await Promise.all([])
      .then(() => {
        return {
          result: true,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  /**
   *
   * @param requestBody
   * @returns Promise with BooleanResponseDto|ErrorResponse
   */
  @Post("validate/addons")
  @HttpCode(200)
  async validateAddons(
    @Body() requestBody: AddonsRequestDto
  ): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      result: true,
    };
  }

  /**
   * @returns Promise with BooleanResponseDto|ErrorResponse
   */
  @Post("validate/action-fields")
  @HttpCode(200)
  async validateActionFields(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ActionFieldsRequestDto
  ): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      result: true,
    };
  }

  @Post("install")
  @HttpCode(200)
  async install(): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      result: true,
    };
  }

  @Post("uninstall")
  @HttpCode(200)
  async uninstall(): Promise<BooleanResponseDto | ErrorResponseDto> {
    //Perform all necessary actions here

    return {
      result: true,
    };
  }
}
