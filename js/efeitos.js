document.onload = $(function () {
  // Menu Fixo
  $(window).bind('scroll', function () {
    var navHeight = $('.header').height();

    if ($(window).scrollTop() > navHeight) {
      $('.header')
        .addClass('fixed')
        .attr('style', `--header-top-height: -${$('.header-top').outerHeight()}px`);
    } else {
      $('.header').removeClass('fixed');
    }
  });
  // Menu Fixo

  // Swiper Carrousel
  var swiper = new Swiper('.card_slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Swiper Carrousel
});

document.onload = $(function () {
  const EVENTS_FOLDER = '../img/eventos';
  const eventData = {
    1: {
      name: 'A Self do Terapeuta',
      description: `
        <p>Com imensa alegria e gratidão, compartilho um momento especial: o lançamento do livro “O Self do Terapeuta”, uma obra sensível e potente que nos convida a refletir sobre quem somos na prática clínica — além das técnicas, dentro da relação.</p>
        <p>Tivemos a honra de receber a coautora, a brilhante Psicóloga Danielle Damo, em um encontro marcado por trocas significativas, afetos e profunda escuta entre colegas e profissionais da Psicologia.</p>
        <p>O evento foi ainda mais especial por ter sido realizado durante um Soirée exclusivo para psicólogos e terapeutas sistêmicos, organizado com muito cuidado e propósito, em parceria com Michelly Martinely, Yuri Rander e a LIASIS — uma noite de inspiração, pertencimento e valorização da nossa prática.</p>
        <p>Sigo com o coração nutrido por essa experiência e com a certeza de que o caminho da Psicologia é feito de encontros que transformam, sustentados pela ética, pelo afeto e pelo compromisso constante com o conhecimento.</p>
        <p>Que venham os próximos capítulos — dentro e fora dos livros.</p>
      `,
      prefix: 'self-do-terapeuta',
      quantity: 10,
      type: 'jpeg',
    },
    2: {
      name: 'Seminário de Psicologia Jurídica do CRP-09',
      description: `
        <p>A caminhada é feita de trocas e aprendizados</p>
        <p>A vida profissional é uma construção contínua, feita de experiências que nos desafiam, ampliam a escuta e fortalecem nossa atuação.</p>
        <p>Como psicóloga perita, parecerista e assistente técnica, sigo firme no compromisso com a ética, o conhecimento e a escuta qualificada.</p>
        <p>Deixo registrado com alegria a participação no Seminário de Psicologia Jurídica e Avaliação Psicológica do CRP09.</p>
        <p>Um dia repleto de reflexões potentes, partilhas enriquecedoras e encontros que renovam a esperança no trabalho comprometido com a justiça e a proteção de direitos.</p>
        <p>É sempre uma honra estar entre profissionais que acreditam no poder transformador da Psicologia. Sigamos juntas(os), aprendendo, contribuindo e evoluindo.</p>
      `,
      prefix: 'seminario-crp09',
      quantity: 4,
      type: 'jpeg',
    },
    3: {
      name: 'Teste HTP',
      description: `
        <p>"Formação contínua como expressão do compromisso ético com a escuta técnica e a justiça psicológica."</p>
        <p>Assim foi o curso de formação no novo teste de HTP (House-Tree-Person), conduzido com excelência pela psicóloga e professora acadêmica @sararcribeiro — uma experiência rica em conhecimento, trocas e aprofundamento técnico.</p>
        <p>Como psicóloga atuante na área jurídica, reafirmo o compromisso com a avaliação psicológica responsável, ética e fundamentada, especialmente nos contextos que envolvem a escuta técnica e os processos judiciais.</p>
        <p>A formação contínua é parte essencial desse percurso. Sigo imensamente feliz por mais uma etapa concluída, convicta de que o aprendizado constante é o que nos move, nos fortalece e qualifica a prática. Gratidão a cada colega que compartilhou essa jornada, às amizades que a Psicologia me proporcionou e às referências que continuam me inspirando.</p>
        <p>Com o coração grato, sigo em movimento, porque o conhecimento é o meu Norte. E o próximo desafio já me espera.</p>
      `,
      prefix: 'teste-htp',
      quantity: 4,
      type: 'jpeg',
    },
    4: {
      name: 'Palestras nas empresas, atendendo as NR’S e a CIPA',
      description: `
        <p>A Psicologia Aplicada às NRs: Cuidar de Pessoas é Cumprir a Norma com Propósito e Segurança. Com mais de dez anos de experiência como psicóloga palestrante em empresas e Industrias, venho contribuindo ativamente para a promoção da saúde mental no ambiente corporativo, alinhando minha atuação às exigências das Normas Regulamentadoras, em especial a NR-01, que trata das disposições gerais e do gerenciamento de riscos ocupacionais.</p>
        <p>Minhas palestras e treinamentos têm como foco não apenas o cumprimento das NRs, mas a construção de ambientes mais saudáveis, cooperativos e conscientes. Utilizo uma abordagem pedagógica interativa, com dinâmicas divertidas, participativas e cheias de significado, promovendo envolvimento real dos colaboradores com os temas abordados. Com base nos aspectos psicossociais e nas demandas específicas de cada organização, desenvolvo conteúdos que abordam temas como:</p>
        <ul>
          <li>Saúde emocional e prevenção de adoecimentos; físico e mental</li>
          <li>Comunicação assertiva e relações interpessoais no trabalho;</li>
          <li>Gestão de conflitos e fortalecimento de equipes;</li>
          <li>Prevenção de riscos comportamentais e promoção da qualidade de vida.</li>
        </ul>
        <p>E diversos outros temas quando necessário.</p>
        <p>Cada encontro é planejado para ser leve, dinâmico e impactante, respeitando a cultura da empresa e garantindo que a experiência vá além do informativo – promovendo reflexão, engajamento e transformação real. Se sua empresa busca atender às Normas Regulamentadoras, em especial a NR01 com responsabilidade, afeto e sentido, estou pronta para contribuir com uma atuação ética, acolhedora e profundamente comprometida com as pessoas.</p>
        <p>Kelly Barbosa Psicóloga Palestrante | Especialista em Saúde Emocional no Trabalho | Atuação em NRs (incluindo NR-01)</p>
      `,
      prefix: 'palestras-empresas-nrs-cipa',
      quantity: 3,
      type: 'jpeg',
    },
    5: {
      name: 'Curso Rorschach R-PAS',
      description: `
        <p>Curso Rorschach R-PAS - "Multiplicando saberes, fortalecendo a prática: a sinergia como impulsionadora da nossa jornada de aprendizado."</p>
        <p>Assim foi o curso de formação no Teste de Rorschach pelo sistema R-PAS, ministrado pela experiente psicóloga e professora Ignez Stephanini — um encontro técnico, humano e profundamente transformador.</p>
        <p>Sigo imensamente feliz por mais uma etapa concluída com sucesso! Um projeto que deu certo, que nos exigiu presença, escuta e troca genuína, e do qual saio ainda mais preparada, convicta de que o conhecimento é caminho de crescimento e responsabilidade.</p>
        <p>Gratidão a cada colega que compartilhou essa jornada, às amizades que a Psicologia me trouxe e às tantas referências que me inspiram todos os dias. Aprender em conjunto sempre amplia o olhar e fortalece a prática.</p>
        <p>Com o coração grato e a mente aberta, sigo movida por aquilo que me sustenta: o conhecimento. E que venham os próximos desafios — porque crescer também é uma escolha diária.</p>
        <br>
        <p><strong>Kelly Barbosa</strong></p>
        <p>Psicóloga CRP09/ 4856</p>
      `,
      prefix: 'curso-rorschach',
      quantity: 5,
      type: 'jpeg',
    },
  };

  for (const key in eventData) {
    const event = eventData[key];
    $('.event__slider .swiper-wrapper').append(
      `
      <div class="swiper-slide">
        <div class="card card__evento">
          <div class="card-header">
            <figure>
              <img
                src="${getEventImage(event, 1)}"
                alt="${event.name}">
            </figure>
          </div>
          <div class="card-body">
            <h3>${event.name}</h3>
            <p>
              ${event.description.length > 100 ? event.description.substring(0, 100) + '...' : event.description}
            </p>
            <button class="btn-reset btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#modalEvent"
              data-event-num="${key}">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    `
    );
  }

  // Event Carrousel
  new Swiper('.event__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-event-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Event Carrousel

  // Modal Event
  const $modalEvent = $('#modalEvent');

  $('body').on('click', '[data-bs-target="#modalEvent"]', function () {
    const event = eventData[$(this).attr('data-event-num')];

    $modalEvent.find('.modal-title, .modal__event--content--title').text(event.name);
    $modalEvent.find('.modal__event--content--description').html(event.description);

    const $swiperWrapper = $modalEvent.find('.swiper-wrapper');
    $swiperWrapper.empty();

    for (let i = 1; i <= event.quantity; i++) {
      $swiperWrapper.append(
        `
          <div class="swiper-slide">
            <div class="event__image--wrapper">
              <figure>
                <img src="${getEventImage(event, i)}" alt="${event.name}">
              </figure>
            </div>
          </div>
        `
      );
    }

    eventSwiper.update();
    eventSwiper.slideTo(0);
  });

  var eventSwiper = new Swiper('.modal_event_slider', {
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: '.swiper-modal-event-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-modal-event-button-next',
      prevEl: '.swiper-modal-event-button-prev',
    },
  });
});

function getEventImage(event, index) {
  return `../img/eventos/${event.prefix}/${event.prefix}-${index}.${event.type ?? 'jpeg'}`;
}
