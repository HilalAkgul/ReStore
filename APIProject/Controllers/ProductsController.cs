using APIProject.Data;
using APIProject.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIProject.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController
    {

        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;

        }


        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var product =await _context.Products.ToListAsync();

            return product;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product =await _context.Products.FindAsync(id);
            return product;

        }
    }
}