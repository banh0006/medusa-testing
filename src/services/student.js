import { BaseService } from "medusa-interfaces";

class StudentService extends BaseService {
  constructor({ productService }) {
    super()

    this.productService_ = productService
  }

  async getMessage() {
    const [product] = await this.productService_.list({}, { take: 1 })

    return `Welcome to ${product?.title || 'no product'}!`
  }
}

export default StudentService