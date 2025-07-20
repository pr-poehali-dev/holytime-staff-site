import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const teamMembers = [
    {
      nickname: "CyberKnight",
      rank: "Team Lead",
      timeInTeam: "2 года 4 месяца",
      avatar: "",
      status: "online",
      projects: 12
    },
    {
      nickname: "DataWizard",
      rank: "Senior Developer",
      timeInTeam: "1 год 8 месяцев",
      avatar: "",
      status: "online",
      projects: 8
    },
    {
      nickname: "CodePhoenix",
      rank: "Full Stack Dev",
      timeInTeam: "1 год 2 месяца",
      avatar: "",
      status: "away",
      projects: 6
    },
    {
      nickname: "PixelMaster",
      rank: "UI/UX Designer",
      timeInTeam: "10 месяцев",
      avatar: "",
      status: "online",
      projects: 4
    },
    {
      nickname: "BugHunter",
      rank: "QA Engineer",
      timeInTeam: "8 месяцев",
      avatar: "",
      status: "offline",
      projects: 3
    },
    {
      nickname: "CloudRunner",
      rank: "DevOps Engineer",
      timeInTeam: "6 месяцев",
      avatar: "",
      status: "online",
      projects: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">⏰</div>
              <h1 className="text-xl font-bold text-foreground">HolyTime</h1>
              <Badge variant="secondary" className="ml-2">Персонал</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Персонал</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Holy<span className="text-primary">Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Управление персоналом и отслеживание времени работы команды. 
              Здесь собрана информация о каждом участнике проекта.
            </p>
            <div className="flex justify-center items-center space-x-4 mb-12">
              <Badge variant="default" className="px-4 py-2">
                <Icon name="Users" size={16} className="mr-2" />
                {teamMembers.length} участников
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Clock" size={16} className="mr-2" />
                Активный проект
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наша Команда</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Профессионалы, которые делают проект реальностью
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {teamMembers.map((member, index) => (
              <Card key={member.nickname} className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/50 w-64 flex-shrink-0">
                <CardHeader className="text-center pb-4">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                      <Icon name="User" size={24} className="text-muted-foreground" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${getStatusColor(member.status)}`}></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {member.nickname}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.rank}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{member.timeInTeam}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={14} />
                    <span>{member.projects} проектов</span>
                  </div>
                  <Badge 
                    variant={member.status === "online" ? "default" : "secondary"}
                    className="mt-2"
                  >
                    {member.status === "online" && "В сети"}
                    {member.status === "away" && "Отошел"}
                    {member.status === "offline" && "Не в сети"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">О Проекте</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold text-foreground">HolyTime - Система управления временем</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                HolyTime представляет собой комплексную систему для отслеживания времени работы, 
                управления проектами и координации команды. Наша платформа помогает организациям 
                эффективно управлять человеческими ресурсами и оптимизировать рабочие процессы.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Отслеживание времени в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Управление ролями и правами доступа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Аналитика производительности команды</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl text-primary font-bold">2+</div>
                  <div className="text-sm text-muted-foreground">Года работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-primary font-bold">{teamMembers.length}</div>
                  <div className="text-sm text-muted-foreground">Участников команды</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-primary font-bold">35+</div>
                  <div className="text-sm text-muted-foreground">Завершенных проектов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">⏰</div>
            <span className="text-lg font-semibold text-foreground">HolyTime</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 HolyTime. Управление временем и командой.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;