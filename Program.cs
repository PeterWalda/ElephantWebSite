var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// Serve static React files from wwwroot
app.UseHttpsRedirection();
app.UseDefaultFiles();  // Ensures index.html is served by default
app.UseStaticFiles();

app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Redirect any unhandled requests (e.g., React Router) to React's index.html
app.MapFallbackToFile("index.html");

app.Run();
