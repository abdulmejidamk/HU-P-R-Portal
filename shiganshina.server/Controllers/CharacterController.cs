using Microsoft.AspNetCore.Mvc;
using Shiganshina.Server.Models;

[Route("api/[controller]")]
[ApiController]
public class CharactersController : ControllerBase
{
    private static List<Character> characters = new List<Character>
    {
        new Character
        {
            Id = 1,
            Name = "Naruto",
            Health = 100,
            AttackPower = 20,
            Ability = "Rasengan",
        },
        new Character
        {
            Id = 2,
            Name = "Sasuke",
            Health = 100,
            AttackPower = 18,
            Ability = "Chidori",
        },
        new Character
        {
            Id = 3,
            Name = "Goku",
            Health = 120,
            AttackPower = 25,
            Ability = "Kamehameha",
        },
        new Character
        {
            Id = 4,
            Name = "Luffy",
            Health = 110,
            AttackPower = 22,
            Ability = "Gum-Gum Pistol",
        },
        new Character
        {
            Id = 5,
            Name = "Edward Elric",
            Health = 95,
            AttackPower = 19,
            Ability = "Alchemic Transmutation",
        },
    };

    [HttpGet]
    public ActionResult<IEnumerable<Character>> GetCharacters()
    {
        return Ok(characters);
    }

    [HttpGet("battle")]
    public ActionResult<string> Battle([FromBody] List<int> characterIds)
    {
        var attacker = characters.First(c => c.Id == characterIds[0]);
        var defender = characters.First(c => c.Id == characterIds[1]);

        defender.Health -= attacker.AttackPower;

        if (defender.Health <= 0)
            return Ok($"{attacker.Name} wins!");

        return Ok($"{defender.Name} has {defender.Health} health left.");
    }
}
