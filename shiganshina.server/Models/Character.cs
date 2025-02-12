namespace Shiganshina.Server.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Health { get; set; }
        public int AttackPower { get; set; }
        public string Ability { get; set; } = string.Empty;
    }
}
